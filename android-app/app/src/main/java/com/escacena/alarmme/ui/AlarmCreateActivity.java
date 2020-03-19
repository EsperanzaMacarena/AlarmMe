package com.escacena.alarmme.ui;

import androidx.appcompat.app.AlertDialog;
import androidx.appcompat.app.AppCompatActivity;
import androidx.constraintlayout.widget.ConstraintLayout;
import androidx.lifecycle.Observer;
import androidx.lifecycle.ViewModelProvider;

import android.content.DialogInterface;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

import com.escacena.alarmme.R;
import com.escacena.alarmme.common.Constants;
import com.escacena.alarmme.common.MyApp;
import com.escacena.alarmme.request.RequestAlarmCreate;
import com.escacena.alarmme.response.ResponseAllAlarm;
import com.escacena.alarmme.response.ResponseType;
import com.escacena.alarmme.viewmodel.AlarmViewModel;
import com.escacena.alarmme.viewmodel.TypeViewModel;

import java.util.List;

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

    String ubication[];
    ResponseType choosen;

    TypeViewModel typeViewModel;
    AlarmViewModel alarmViewModel;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_alarm_create);

        ButterKnife.bind(this);

        typeViewModel = new ViewModelProvider(this).get(TypeViewModel.class);
        alarmViewModel = new ViewModelProvider(this).get(AlarmViewModel.class);

        ubication= new String[2];

        create.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Toast.makeText(MyApp.getContext(), "Debes indicar un tipo de alarma",Toast.LENGTH_SHORT).show();
            }
        });

        loadTypes();

    }

    void loadTypes(){
        typeViewModel.getTypes().observe(this, new Observer<List<ResponseType>>() {
            @Override
            public void onChanged(final List<ResponseType> responseTypes) {
                    setDialogTypes(responseTypes);
            }
        });
    }

    void setDialogTypes(final List<ResponseType> responseTypes){
        type.setOnFocusChangeListener(new View.OnFocusChangeListener() {
            @Override
            public void onFocusChange(View v, boolean hasFocus) {
                if(hasFocus){
                    AlertDialog.Builder dialog = new AlertDialog.Builder(AlarmCreateActivity.this);
                    dialog.setTitle("Selecciona el tipo de alarma");
                    final String[] titles = new String[responseTypes.size()];

                    for (int i = 0; i < titles.length; i++) {
                        titles[i] = responseTypes.get(i).getDescription();
                    }

                    dialog.setItems(titles, new DialogInterface.OnClickListener() {
                        @Override
                        public void onClick(DialogInterface dialog, int which) {
                            choosen = responseTypes.get(which);
                            if (choosen.getPlaces().equals(Constants.TRANSPORT)) {
                                //TODO: OPCIÓN DE TRANSPORTE (PONER transport EN VISIBLE)

                            } else if (choosen.getPlaces().equals(Constants.GO_TO)) {
                                //TODO: OPCIÓN DE SEÑALAR EN MAPA, ABRIR MAPA Y DEMÁS.
                            }else{
                                title.setText(choosen.getDescription());
                            }

                            type.setText(choosen.getDescription());

                            setCreateButton();
                            dialog.dismiss();

                        }
                    });
                    AlertDialog alert = dialog.create();
                    alert.show();
                }

            }
        });

    }

    void setCreateButton(){

        create.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                RequestAlarmCreate request = RequestAlarmCreate.builder()
                        .name(title.getText().toString().isEmpty()? choosen.getDescription():title.getText().toString() )
                        .type(choosen.get_id())
                        .ubication(ubication)
                        .build();


                alarmViewModel.createAlarm(request).observe(AlarmCreateActivity.this, new Observer<ResponseAllAlarm>() {
                    @Override
                    public void onChanged(ResponseAllAlarm alarm) {
                        if(alarm!=null){
                            finish();
                        }
                    }
                });
            }
        });
    }
}
