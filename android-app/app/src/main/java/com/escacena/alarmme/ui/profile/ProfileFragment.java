package com.escacena.alarmme.ui.profile;

import android.os.Bundle;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.ProgressBar;
import android.widget.TextView;

import androidx.annotation.NonNull;
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
import com.escacena.alarmme.response.ResponsePicture;
import com.escacena.alarmme.response.ResponseUser;
import com.escacena.alarmme.viewmodel.UserViewModel;
import com.google.android.material.floatingactionbutton.FloatingActionButton;

import org.w3c.dom.Text;

import butterknife.BindView;
import butterknife.ButterKnife;

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

    public View onCreateView(@NonNull LayoutInflater inflater,
                             ViewGroup container, Bundle savedInstanceState) {
        View root = inflater.inflate(R.layout.fragment_profile, container, false);

        ButterKnife.bind(this, root);

        userViewModel = new ViewModelProvider(getActivity()).get(UserViewModel.class);

        userViewModel.getCurrentUser().observe(getActivity(), new Observer<ResponseUser>() {
            @Override
            public void onChanged(ResponseUser user) {

                email.setText(user.getEmail());

                if (user.getFullname() != null)
                    name.setText(user.getFullname());
                else
                    name.setVisibility(View.GONE);


                if (user.getPicture() != null) {
                    GlideUrl glideUrl = new GlideUrl(Constants.BASE_URL_ALARMME_API + Constants.ROUTE_ALARMME_IMG_CURRENT_USER,
                            new LazyHeaders.Builder()
                                    .addHeader("Authorization", "Bearer " + SharedPreferencesManager.getSharedPreferencesManager().getString("token", null))
                                    .build());

                    Glide.with(MyApp.getContext()).load(glideUrl).diskCacheStrategy(DiskCacheStrategy.NONE).centerCrop().into(avatar);
                } else {
                    Glide.with(MyApp.getContext()).load(R.drawable.iconfinder_unknown_403017).diskCacheStrategy(DiskCacheStrategy.NONE).circleCrop().into(avatar);
                }

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
                        //TODO:AL MODIFICAR USAR Glide.get(context).clearMemory()
                    }
                });

                editName.setOnClickListener(new View.OnClickListener() {
                    @Override
                    public void onClick(View v) {

                    }
                });

                editPass.setOnClickListener(new View.OnClickListener() {
                    @Override
                    public void onClick(View v) {

                    }
                });
            }
        });
        return root;
    }

}
