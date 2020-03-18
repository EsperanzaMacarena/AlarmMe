package com.escacena.alarmme.ui;

import androidx.appcompat.app.AlertDialog;
import androidx.appcompat.app.AppCompatActivity;
import androidx.constraintlayout.widget.ConstraintLayout;

import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;

import com.escacena.alarmme.R;

import butterknife.BindView;
import butterknife.ButterKnife;

public class AlarmCreateActivity extends AppCompatActivity {
    @BindView(R.id.create_alarm_type)
    EditText type;
    @BindView(R.id.create_alarm_title)
    EditText title;
    @BindView(R.id.create_alarm_consorcio)
    EditText consorcio;
    @BindView(R.id.create_alarm_linea)
    EditText linea;
    @BindView(R.id.create_alarm_parada)
    EditText parada;
    @BindView(R.id.type_transport)
    ConstraintLayout transport;
    @BindView(R.id.create_btn)
    Button create;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_alarm_create);
        ButterKnife.bind(this);
        loadTypes();

    }

    public void loadTypes(){
        type.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                AlertDialog.Builder dialog = new AlertDialog.Builder(AlarmCreateActivity.this);
                dialog.setTitle("Selecciona el tipo de alarma");

            }
        });

    }
}
