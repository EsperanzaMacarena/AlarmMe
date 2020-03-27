package com.escacena.alarmme;

import android.app.ProgressDialog;
import android.content.Intent;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ImageView;
import android.widget.TextView;
import android.widget.Toast;

import com.bumptech.glide.Glide;
import com.escacena.alarmme.common.Constants;
import com.escacena.alarmme.common.SharedPreferencesManager;
import com.escacena.alarmme.request.RequestLogin;
import com.escacena.alarmme.response.ResponseLogin;
import com.escacena.alarmme.viewmodel.LoginViewModel;
import com.google.android.gms.auth.api.signin.GoogleSignIn;
import com.google.android.gms.auth.api.signin.GoogleSignInAccount;
import com.google.android.gms.auth.api.signin.GoogleSignInClient;
import com.google.android.gms.auth.api.signin.GoogleSignInOptions;
import com.google.android.gms.common.api.ApiException;
import com.google.android.gms.tasks.Task;

import androidx.annotation.Nullable;
import androidx.appcompat.app.AppCompatActivity;
import androidx.lifecycle.Observer;
import androidx.lifecycle.ViewModelProvider;
import butterknife.BindView;
import butterknife.ButterKnife;


public class MainActivity extends AppCompatActivity {
    @BindView(R.id.login_logo)
    ImageView logo;
    @BindView(R.id.forgot_password)
    TextView forgotPassword;
    @BindView(R.id.login_btn)
    Button login;
    @BindView(R.id.login_email)
    EditText email;
    @BindView(R.id.login_password)
    EditText password;
    @BindView(R.id.sign_up)
    TextView signup;
    @BindView(R.id.sign_in_google)
    Button google;

    LoginViewModel loginViewModel;
    private ProgressDialog myProgress;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        String token = SharedPreferencesManager.getSharedPreferencesManager().getString("token", null);


        myProgress = new ProgressDialog(this);
        myProgress.setTitle("Iniciando sesión");
        myProgress.setMessage("Por favor, espere...");
        myProgress.setCancelable(false);
        myProgress.setIndeterminate(true);

        if (token != null) {
            Intent success = new Intent(MainActivity.this, BoardActivity.class);
            startActivity(success);
        }

        super.onCreate(savedInstanceState);
        GoogleSignInOptions gso = new GoogleSignInOptions.Builder(GoogleSignInOptions.DEFAULT_SIGN_IN)
                .requestEmail()
                .build();

        final GoogleSignInClient mGoogleSignInClient = GoogleSignIn.getClient(this, gso);

        setContentView(R.layout.activity_main);

        ButterKnife.bind(this);

        Glide.with(this).load(R.drawable.logo).into(logo);

        loginViewModel = new ViewModelProvider(this).get(LoginViewModel.class);


        login.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                myProgress.show();
                loginViewModel.login(new RequestLogin(email.getText().toString(),
                        password.getText().toString())).observe(MainActivity.this, new Observer<ResponseLogin>() {
                    @Override
                    public void onChanged(ResponseLogin responseLogin) {
                        SharedPreferencesManager.setSomeStringValue("token", responseLogin.getToken());
                        Intent success = new Intent(MainActivity.this, BoardActivity.class);
                        startActivity(success);
                        finish();
                    }
                });
            }
        });
        signup.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent register = new Intent(MainActivity.this, RegisterActivity.class);
                startActivity(register);
            }
        });

        google.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent google = mGoogleSignInClient.getSignInIntent();
                startActivityForResult(google, Constants.GOOGLE_SIGN_IN);
            }
        });
    }

    @Override
    protected void onActivityResult(int requestCode, int resultCode, @Nullable Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
        if (requestCode == Constants.GOOGLE_SIGN_IN) {
            Task<GoogleSignInAccount> task = GoogleSignIn.getSignedInAccountFromIntent(data);
            handleSignInResult(task);
        }
    }

    private void handleSignInResult(Task<GoogleSignInAccount> completedTask) {
        try {
            GoogleSignInAccount account = completedTask.getResult(ApiException.class);

            Intent toRegister = new Intent(this, RegisterActivity.class);

            toRegister.putExtra("email", account.getEmail());
            toRegister.putExtra("fullname", account.getDisplayName());

            startActivity(toRegister);

        } catch (ApiException e) {
            Log.d("signInResult:failed code=" , String.valueOf(e.getStatusCode()));
            Toast.makeText(MainActivity.this, "No se ha podido iniciar sesión con google", Toast.LENGTH_SHORT).show();
        }
    }


}
