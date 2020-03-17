package com.escacena.alarmme;

import androidx.appcompat.app.AppCompatActivity;
import androidx.lifecycle.Observer;
import androidx.lifecycle.ViewModelProvider;
import butterknife.BindView;
import butterknife.ButterKnife;

import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

import com.escacena.alarmme.common.MyApp;
import com.escacena.alarmme.common.SharedPreferencesManager;
import com.escacena.alarmme.request.RequestLogin;
import com.escacena.alarmme.request.RequestRegister;
import com.escacena.alarmme.response.ResponseLogin;
import com.escacena.alarmme.viewmodel.LoginViewModel;

public class RegisterActivity extends AppCompatActivity {

    @BindView(R.id.button_register)
    Button buttonRegister;

    @BindView(R.id.editText_register_email)
    EditText editTextRegisterEmail;

    @BindView(R.id.editText_register_passwordOne)
    EditText editTextRegisterPasswordOne;

    @BindView(R.id.editText_register_passwordTwo)
    EditText editTextRegisterPasswordTwo;

    @BindView(R.id.editText_register_fullname)
    EditText editTextRegisterFullname;

    LoginViewModel loginViewModel;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_register);
        ButterKnife.bind(this);
        loginViewModel = new ViewModelProvider(this).get(LoginViewModel.class);
        buttonRegister.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                if (editTextRegisterPasswordOne.getText().toString().equals(editTextRegisterPasswordTwo.getText().toString())) {
                    loginViewModel.register(new RequestRegister(editTextRegisterEmail.getText().toString(), editTextRegisterFullname.getText().toString(), editTextRegisterPasswordOne.getText().toString()))
                            .observe(RegisterActivity.this, new Observer<ResponseLogin>() {
                                @Override
                                public void onChanged(ResponseLogin responseLogin) {

                                    SharedPreferencesManager.setSomeStringValue("token", responseLogin.getToken());
                                    //Intent success = new Intent(this, );
                                    //startActivity(success);
                                    Toast.makeText(MyApp.getContext(), "LOGIN SUCCESSFUL", Toast.LENGTH_LONG).show();
                                }
                            });
                } else {
                    Toast.makeText(RegisterActivity.this, "Contraseñas no coinciden", Toast.LENGTH_SHORT).show();
                }
            }
        });
    }
}
