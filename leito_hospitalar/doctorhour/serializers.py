from rest_framework import serializers
from .models import Doctor

class DoctorHourSerializer(serializers.ModelSerializer):
    class Meta:
        model = Doctor
        fields = '__all__'

    def create(self, validated_data):
        name = validated_data.get('name', None)
        workload = validated_data.get('workload', None)
        category= validated_data.get('category', None)
        hospital= validated_data.get('hospital', None)
        CPF= validated_data.get('CPF', None)
        registration= validated_data.get('registration', None)
        ''' Segunda '''
        seg_2_4= validated_data.get('seg_2_4', None)
        seg_4_6= validated_data.get('seg_4_6', None)
        seg_6_8= validated_data.get('seg_6_8', None)
        seg_8_10= validated_data.get('seg_8_10', None)
        seg_10_12= validated_data.get('seg_10_12', None)
        seg_12_14= validated_data.get('seg_12_14', None)
        seg_14_16= validated_data.get('seg_14_16', None)
        seg_16_18= validated_data.get('seg_16_18', None)
        seg_18_20= validated_data.get('seg_18_20', None)
        seg_20_22= validated_data.get('seg_20_22', None)
        seg_22_24= validated_data.get('seg_22_24', None)
        ''' Terça '''
        ter_2_4= validated_data.get('ter_2_4', None)
        ter_4_6= validated_data.get('ter_4_6', None)
        ter_6_8= validated_data.get('ter_6_8', None)
        ter_8_10= validated_data.get('ter_8_10', None)
        ter_10_12= validated_data.get('ter_10_12', None)
        ter_12_14= validated_data.get('ter_12_14', None)
        ter_14_16= validated_data.get('ter_14_16', None)
        ter_16_18= validated_data.get('ter_16_18', None)
        ter_18_20= validated_data.get('ter_18_20', None)
        ter_20_22= validated_data.get('ter_20_22', None)
        ter_22_24= validated_data.get('ter_22_24', None)
        ''' Quarta '''
        qua_2_4= validated_data.get('qua_2_4', None)
        qua_4_6= validated_data.get('qua_4_6', None)
        qua_6_8= validated_data.get('qua_6_8', None)
        qua_8_10= validated_data.get('qua_8_10', None)
        qua_10_12= validated_data.get('qua_10_12', None)
        qua_12_14= validated_data.get('qua_12_14', None)
        qua_14_16= validated_data.get('qua_14_16', None)
        qua_16_18= validated_data.get('qua_16_18', None)
        qua_18_20= validated_data.get('qua_18_20', None)
        qua_20_22= validated_data.get('qua_20_22', None)
        qua_22_24= validated_data.get('qua_22_24', None)
        ''' Quinta '''
        qui_2_4= validated_data.get('qui_2_4', None)
        qui_4_6= validated_data.get('qui_4_6', None)
        qui_6_8= validated_data.get('qui_6_8', None)
        qui_8_10= validated_data.get('qui_8_10', None)
        qui_10_12= validated_data.get('qui_10_12', None)
        qui_12_14= validated_data.get('qui_12_14', None)
        qui_14_16= validated_data.get('qui_14_16', None)
        qui_16_18= validated_data.get('qui_16_18', None)
        qui_18_20= validated_data.get('qui_18_20', None)
        qui_20_22= validated_data.get('qui_20_22', None)
        qui_22_24= validated_data.get('qui_22_24', None)
        ''' Sexta '''
        sex_2_4= validated_data.get('sex_2_4', None)
        sex_4_6= validated_data.get('sex_4_6', None)
        sex_6_8= validated_data.get('sex_6_8', None)
        sex_8_10= validated_data.get('sex_8_10', None)
        sex_10_12= validated_data.get('sex_10_12', None)
        sex_12_14= validated_data.get('sex_12_14', None)
        sex_14_16= validated_data.get('sex_14_16', None)
        sex_16_18= validated_data.get('sex_16_18', None)
        sex_18_20= validated_data.get('sex_18_20', None)
        sex_20_22= validated_data.get('sex_20_22', None)
        sex_22_24= validated_data.get('sex_22_24', None)
        ''' Sábado '''
        sab_2_4= validated_data.get('sab_2_4', None)
        sab_4_6= validated_data.get('sab_4_6', None)
        sab_6_8= validated_data.get('sab_6_8', None)
        sab_8_10= validated_data.get('sab_8_10', None)
        sab_10_12= validated_data.get('sab_10_12', None)
        sab_12_14= validated_data.get('sab_12_14', None)
        sab_14_16= validated_data.get('sab_14_16', None)
        sab_16_18= validated_data.get('sab_16_18', None)
        sab_18_20= validated_data.get('sab_18_20', None)
        sab_20_22= validated_data.get('sab_20_22', None)
        sab_22_24= validated_data.get('sab_22_24', None)
        ''' Domingo '''
        dom_2_4= validated_data.get('dom_2_4', None)
        dom_4_6= validated_data.get('dom_4_6', None)
        dom_6_8= validated_data.get('dom_6_8', None)
        dom_8_10= validated_data.get('dom_8_10', None)
        dom_10_12= validated_data.get('dom_10_12', None)
        dom_12_14= validated_data.get('dom_12_14', None)
        dom_14_16= validated_data.get('dom_14_16', None)
        dom_16_18= validated_data.get('dom_16_18', None)
        dom_18_20= validated_data.get('dom_18_20', None)
        dom_20_22= validated_data.get('dom_20_22', None)
        dom_22_24= validated_data.get('dom_22_24', None)
        return Doctor.objects.create(
            name=name, workload=workload, category=category, hospital=hospital, CPF=CPF, registration=registration,
            seg_2_4=seg_2_4, seg_4_6=seg_4_6, seg_6_8=seg_6_8, seg_10_12=seg_10_12, seg_12_14=seg_12_14, seg_14_16=seg_14_16,
            seg_16_18=seg_16_18, seg_18_20=seg_18_20, seg_20_22=seg_20_22, seg_22_24=seg_22_24,
            ter_2_4=ter_2_4, ter_4_6=ter_4_6, ter_6_8=ter_6_8, ter_10_12=ter_10_12, ter_12_14=ter_12_14, ter_14_16=ter_14_16,
            ter_16_18=ter_16_18, ter_18_20=ter_18_20, ter_20_22=ter_20_22, ter_22_24=ter_22_24,
            qua_2_4=qua_2_4, qua_4_6=qua_4_6, qua_6_8=qua_6_8, qua_10_12=qua_10_12, qua_12_14=qua_12_14, qua_14_16=qua_14_16,
            qua_16_18=qua_16_18, qua_18_20=qua_18_20, qua_20_22=qua_20_22, qua_22_24=qua_22_24,
            qui_2_4=qui_2_4, qui_4_6=qui_4_6, qui_6_8=qui_6_8, qui_10_12=qui_10_12, qui_12_14=qui_12_14, qui_14_16=qui_14_16,
            qui_16_18=qui_16_18, qui_18_20=qui_18_20, qui_20_22=qui_20_22, qui_22_24=qui_22_24,
            sex_2_4=sex_2_4, sex_4_6=sex_4_6, sex_6_8=sex_6_8, sex_10_12=sex_10_12, sex_12_14=sex_12_14, sex_14_16=sex_14_16,
            sex_16_18=sex_16_18, sex_18_20=sex_18_20, sex_20_22=sex_20_22, sex_22_24=sex_22_24,
            sab_2_4=sab_2_4, sab_4_6=sab_4_6, sab_6_8=sab_6_8, sab_10_12=sab_10_12, sab_12_14=sab_12_14, sab_14_16=sab_14_16,
            sab_16_18=sab_16_18, sab_18_20=sab_18_20, sab_20_22=sab_20_22, sab_22_24=sab_22_24,
            dom_2_4=dom_2_4, dom_4_6=dom_4_6, dom_6_8=dom_6_8, dom_10_12=dom_10_12, dom_12_14=dom_12_14, dom_14_16=dom_14_16,
            dom_16_18=dom_16_18, dom_18_20=dom_18_20, dom_20_22=dom_20_22, dom_22_24=dom_22_24,
        )
