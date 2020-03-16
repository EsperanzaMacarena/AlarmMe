package com.escacena.alarmme;

import androidx.appcompat.app.AppCompatActivity;
import androidx.lifecycle.Observer;
import androidx.lifecycle.ViewModelProvider;

import android.app.ActionBar;
import android.os.Bundle;
import android.view.View;
import android.view.Window;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ImageView;
import android.widget.TextView;
import android.widget.Toast;
import android.widget.Toolbar;

import com.bumptech.glide.Glide;
import com.escacena.alarmme.common.MyApp;
import com.escacena.alarmme.request.RequestLogin;
import com.escacena.alarmme.response.ResponseLogin;
import com.escacena.alarmme.viewmodel.LoginViewModel;

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

    LoginViewModel loginViewModel;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        setContentView(R.layout.activity_main);

        ButterKnife.bind(this);

        Glide.with(this).load(R.drawable.logo).into(logo);

        loginViewModel = new ViewModelProvider(this).get(LoginViewModel.class);

        login.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                loginViewModel.login(new RequestLogin(email.getText().toString(),
                        password.getText().toString())).observe(MainActivity.this, new Observer<ResponseLogin>() {
                    @Override
                    public void onChanged(ResponseLogin responseLogin) {
                        //Intent success = new Intent(this, );
                        //startActivity(success);
                        Toast.makeText(MyApp.getContext(), "LOGIN SUCCESSFUL", Toast.LENGTH_LONG).show();
                    }
                });
            }
        });
        signup.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                //Intent register = new Intent(this, );
                //startActivity(register);
            }
        });
    }
}
