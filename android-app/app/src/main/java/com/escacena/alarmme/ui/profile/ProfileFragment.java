package com.escacena.alarmme.ui.profile;

import android.app.Activity;
import android.content.ClipData;
import android.content.ContentResolver;
import android.content.DialogInterface;
import android.content.Intent;
import android.net.Uri;
import android.os.Bundle;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.ProgressBar;
import android.widget.TextView;
import android.widget.Toast;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.appcompat.app.AlertDialog;
import androidx.fragment.app.Fragment;
import androidx.lifecycle.Observer;
import androidx.lifecycle.ViewModelProvider;

import com.bumptech.glide.Glide;
import com.bumptech.glide.load.engine.DiskCacheStrategy;
import com.bumptech.glide.load.model.GlideUrl;
import com.bumptech.glide.load.model.LazyHeaders;
import com.escacena.alarmme.R;
import com.escacena.alarmme.common.Constants;
import com.escacena.alarmme.common.MyApp;
import com.escacena.alarmme.common.SharedPreferencesManager;
import com.escacena.alarmme.response.ResponseDeletePicture;
import com.escacena.alarmme.response.ResponsePicture;
import com.escacena.alarmme.response.ResponseUser;
import com.escacena.alarmme.ui.AlarmCreateActivity;
import com.escacena.alarmme.viewmodel.UserViewModel;
import com.google.android.material.floatingactionbutton.FloatingActionButton;

import org.w3c.dom.Text;

import java.io.BufferedInputStream;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.List;

import butterknife.BindView;
import butterknife.ButterKnife;
import okhttp3.MediaType;
import okhttp3.MultipartBody;
import okhttp3.RequestBody;

public class ProfileFragment extends Fragment {
    @BindView(R.id.profile_edit_name)
    Button editName;
    @BindView(R.id.profile_edit_photo)
    FloatingActionButton editPhoto;
    @BindView(R.id.profile_edit_password)
    Button editPass;
    @BindView(R.id.profile_email)
    TextView email;
    @BindView(R.id.profile_name)
    TextView name;
    @BindView(R.id.profile_photo)
    ImageView avatar;
    @BindView(R.id.profile_progresss_bar)
    ProgressBar progressBar;
    @BindView(R.id.profile_title)
    TextView title;

    UserViewModel userViewModel;

    private static final int READ_REQUEST_CODE = 42;
    private int numOptions = 2;

    public View onCreateView(@NonNull LayoutInflater inflater,
                             ViewGroup container, Bundle savedInstanceState) {
        View root = inflater.inflate(R.layout.fragment_profile, container, false);

        ButterKnife.bind(this, root);

        userViewModel = new ViewModelProvider(getActivity()).get(UserViewModel.class);

        userViewModel.getCurrentUser().observe(getActivity(), new Observer<ResponseUser>() {
            @Override
            public void onChanged(ResponseUser user) {

                email.setText(user.getEmail());

                if (user.getFullname() != null) name.setText(user.getFullname());
                else name.setVisibility(View.GONE);

                if (user.getPicture() != null)  setPicture();
                else setDefaultPic();

                progressBar.setVisibility(View.GONE);
                email.setVisibility(View.VISIBLE);
                name.setVisibility(View.VISIBLE);
                editPass.setVisibility(View.VISIBLE);
                editName.setVisibility(View.VISIBLE);
                editPhoto.show();
                title.setVisibility(View.VISIBLE);
                avatar.setVisibility(View.VISIBLE);

                editPhoto.setOnClickListener(new View.OnClickListener() {
                    @Override
                    public void onClick(View v) {
                        AlertDialog.Builder dialog = new AlertDialog.Builder(getActivity());
                        dialog.setTitle("Selecciona una opción");

                        final String[] options = new String[numOptions];
                        options[0] = "Subir/modificar foto";
                        options[1] = "Eliminar foto actual";

                        dialog.setItems(options, new DialogInterface.OnClickListener() {
                            @Override
                            public void onClick(DialogInterface dialog, int which) {
                                if (which == 0) {
                                    Intent upload = new Intent(Intent.ACTION_OPEN_DOCUMENT);
                                    upload.addCategory(Intent.CATEGORY_OPENABLE);
                                    upload.setType("image/*");
                                    startActivityForResult(upload, READ_REQUEST_CODE);

                                } else {
                                    userViewModel.deletePicture().observe(getActivity(), new Observer<ResponseDeletePicture>() {
                                        @Override
                                        public void onChanged(ResponseDeletePicture responseDeletePicture) {
                                            if (responseDeletePicture.isSuccess()) setDefaultPic();
                                        }
                                    });
                                }
                                dialog.dismiss();
                            }
                        });
                        AlertDialog alert = dialog.create();
                        alert.show();
                    }
                });

                editName.setOnClickListener(new View.OnClickListener() {
                    @Override
                    public void onClick(View v) {
                        //TODO: EDITAR NOMBRE

                    }
                });

                editPass.setOnClickListener(new View.OnClickListener() {
                    @Override
                    public void onClick(View v) {
                        //TODO: EDITAR PASSWORD
                    }
                });
            }
        });
        return root;
    }

    public void setDefaultPic() {
        Glide.get(MyApp.getContext()).clearMemory();
        Glide.with(MyApp.getContext()).load(R.drawable.iconfinder_unknown_403017).diskCacheStrategy(DiskCacheStrategy.NONE).circleCrop().into(avatar);
    }

    public void setPicture() {
        GlideUrl glideUrl = new GlideUrl(Constants.BASE_URL_ALARMME_API + Constants.ROUTE_ALARMME_IMG_CURRENT_USER,
                new LazyHeaders.Builder()
                        .addHeader("Authorization", "Bearer " + SharedPreferencesManager.getSharedPreferencesManager().getString("token", null))
                        .build());

        Glide.with(MyApp.getContext()).load(glideUrl).diskCacheStrategy(DiskCacheStrategy.NONE).centerCrop().into(avatar);
    }

    @Override
    public void onActivityResult(int requestCode, int resultCode, @Nullable Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
        if (requestCode == READ_REQUEST_CODE && resultCode == Activity.RESULT_OK) {
            if (data != null) save(data.getData());
        }
    }


    private void save(Uri uri) {
        MultipartBody.Part img = null;

        try {
            InputStream inputStream = getActivity().getContentResolver().openInputStream(uri);

            ByteArrayOutputStream baos = new ByteArrayOutputStream();
            BufferedInputStream bufferedInputStream = new BufferedInputStream(inputStream);

            int cantBytes;
            byte[] buffer = new byte[1024 * 4];

            while ((cantBytes = bufferedInputStream.read(buffer, 0, 1024 * 4)) != -1) {
                baos.write(buffer, 0, cantBytes);
            }
            if (uri != null) {

                ContentResolver contentResolver = getActivity().getContentResolver();

                RequestBody filePart =
                        RequestBody.create(
                                MediaType.parse("multipart/form-data"), baos.toByteArray());

                img = MultipartBody.Part.createFormData("avatar", "photo", filePart);

                userViewModel.updatePicture(img).observe(getActivity(), new Observer<ResponseUser>() {
                    @Override
                    public void onChanged(ResponseUser responseUser) {
                        if (responseUser != null) setPicture();
                    }
                });
            }
        } catch (IOException exception) {
            Log.d("EXCEPTION UPLOAD", exception.getMessage());
        }

    }
}
