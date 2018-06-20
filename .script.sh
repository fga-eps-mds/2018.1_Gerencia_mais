echo "from django.contrib.auth.models import User; User.objects.create_superuser('victorhdcoelho', 'victor@example.com', 'pass')" | ./manage.py shell
echo "from django.contrib.auth.models import User; from schedule.models import Calendar; Calendar.objects.create(name='Calendario_Medico', slug='calendario-medico')" | ./manage.py shell

echo "from django.contrib.auth.models import User; from subtitle.models import Subtitles; Subtitles.objects.create(code='PM6',begin='07:00',finish='13:00',description='Atendimento Pronto Socorro')" | ./manage.py shell
echo "from django.contrib.auth.models import User; from subtitle.models import Subtitles; Subtitles.objects.create(code='IPM5',begin='08:00',finish='13:00',description='Internação Pronto Socorro')" | ./manage.py shell
echo "from django.contrib.auth.models import User; from subtitle.models import Subtitles; Subtitles.objects.create(code='PM5',begin='08:00',finish='13:00',description='Atendimento Pronto Socorro')" | ./manage.py shell
echo "from django.contrib.auth.models import User; from subtitle.models import Subtitles; Subtitles.objects.create(code='IPM6',begin='07:00',finish='13:00',description='Internação Pronto Socorro')" | ./manage.py shell

echo "from django.contrib.auth.models import User; from subtitle.models import Subtitles; Subtitles.objects.create(code='PT6',begin='13:00',finish='19:00',description='Atendimento Pronto Socorro')" | ./manage.py shell
echo "from django.contrib.auth.models import User; from subtitle.models import Subtitles; Subtitles.objects.create(code='PT5',begin='13:00',finish='18:00',description='Atendimento Pronto Socorro')" | ./manage.py shell
echo "from django.contrib.auth.models import User; from subtitle.models import Subtitles; Subtitles.objects.create(code='PT6*',begin='12:00',finish='18:00',description='Atendimento Pronto Socorro')" | ./manage.py shell
echo "from django.contrib.auth.models import User; from subtitle.models import Subtitles; Subtitles.objects.create(code='IPT5',begin='13:00',finish='18:00',description='Internação Pronto Socorro')" | ./manage.py shell
echo "from django.contrib.auth.models import User; from subtitle.models import Subtitles; Subtitles.objects.create(code='IPT6',begin='13:00',finish='19:00',description='Internação Pronto Socorro')" | ./manage.py shell
echo "from django.contrib.auth.models import User; from subtitle.models import Subtitles; Subtitles.objects.create(code='IPT6*',begin='12:00',finish='18:00',description='Internação Pronto Socorro')" | ./manage.py shell

echo "from django.contrib.auth.models import User; from subtitle.models import Subtitles; Subtitles.objects.create(code='PN12',begin='19:00',finish='07:00',description='Atendimento Pronto Socorro')" | ./manage.py shell
echo "from django.contrib.auth.models import User; from subtitle.models import Subtitles; Subtitles.objects.create(code='PN5',begin='19:00',finish='00:00',description='Atendimento Pronto Socorro')" | ./manage.py shell
echo "from django.contrib.auth.models import User; from subtitle.models import Subtitles; Subtitles.objects.create(code='LPN4',begin='18:00',finish='22:00',description='Licença Prêmio')" | ./manage.py shell
echo "from django.contrib.auth.models import User; from subtitle.models import Subtitles; Subtitles.objects.create(code='LPN5',begin='17:00',finish='22:00',description='Licença Prêmio')" | ./manage.py shell
echo "from django.contrib.auth.models import User; from subtitle.models import Subtitles; Subtitles.objects.create(code='PN6*',begin='18:00',finish='00:00',description='Atendimento Pronto Socorro')" | ./manage.py shell
echo "from django.contrib.auth.models import User; from subtitle.models import Subtitles; Subtitles.objects.create(code='PN6',begin='19:00',finish='01:00',description='Atendimento Pronto Socorro')" | ./manage.py shell
echo "from django.contrib.auth.models import User; from subtitle.models import Subtitles; Subtitles.objects.create(code='IPN5',begin='19:00',finish='00:00',description='Internação Pronto Socorro')" | ./manage.py shell
echo "from django.contrib.auth.models import User; from subtitle.models import Subtitles; Subtitles.objects.create(code='IPN6',begin='19:00',finish='01:00',description='Internação Pronto Socorro')" | ./manage.py shell
echo "from django.contrib.auth.models import User; from subtitle.models import Subtitles; Subtitles.objects.create(code='IPN6*',begin='18:00',finish='00:00',description='Internação Pronto Socorro')" | ./manage.py shell
echo "from django.contrib.auth.models import User; from subtitle.models import Subtitles; Subtitles.objects.create(code='IPN12',begin='19:00',finish='07:00',description='Internação Pronto Socorro')" | ./manage.py shell
echo "from django.contrib.auth.models import User; from subtitle.models import Subtitles; Subtitles.objects.create(code='LPN6',begin='16:00',finish='22:00',description='Licença Prêmio')" | ./manage.py shell

echo "from django.contrib.auth.models import User; from subtitle.models import Subtitles; Subtitles.objects.create(code='AM4*',begin='07:00',finish='11:00',description='Ambulatório')" | ./manage.py shell
echo "from django.contrib.auth.models import User; from subtitle.models import Subtitles; Subtitles.objects.create(code='AM4',begin='08:00',finish='12:00',description='Ambulatório')" | ./manage.py shell
echo "from django.contrib.auth.models import User; from subtitle.models import Subtitles; Subtitles.objects.create(code='AM5',begin='07:00',finish='12:00',description='Ambulatório')" | ./manage.py shell
echo "from django.contrib.auth.models import User; from subtitle.models import Subtitles; Subtitles.objects.create(code='AM6',begin='07:00',finish='13:00',description='Radiologia')" | ./manage.py shell
echo "from django.contrib.auth.models import User; from subtitle.models import Subtitles; Subtitles.objects.create(code='AM5*',begin='08:00',finish='13:00',description='Ambulatório')" | ./manage.py shell

echo "from django.contrib.auth.models import User; from subtitle.models import Subtitles; Subtitles.objects.create(code='AT4*',begin='13:00',finish='17:00',description='Ambulatório')" | ./manage.py shell
echo "from django.contrib.auth.models import User; from subtitle.models import Subtitles; Subtitles.objects.create(code='AT4',begin='14:00',finish='18:00',description='Ambulatório')" | ./manage.py shell
echo "from django.contrib.auth.models import User; from subtitle.models import Subtitles; Subtitles.objects.create(code='AT5',begin='13:00',finish='18:00',description='Ambulatório')" | ./manage.py shell
echo "from django.contrib.auth.models import User; from subtitle.models import Subtitles; Subtitles.objects.create(code='AT6',begin='13:00',finish='19:00',description='Radiologia')" | ./manage.py shell

echo "from django.contrib.auth.models import User; from subtitle.models import Subtitles; Subtitles.objects.create(code='AN5',begin='17:00',finish='22:00',description='Ambulatório')" | ./manage.py shell
echo "from django.contrib.auth.models import User; from subtitle.models import Subtitles; Subtitles.objects.create(code='AN4',begin='18:00',finish='22:00',description='Ambulatório')" | ./manage.py shell
echo "from django.contrib.auth.models import User; from subtitle.models import Subtitles; Subtitles.objects.create(code='AN4*',begin='19:00',finish='23:00',description='Ambulatório')" | ./manage.py shell
echo "from django.contrib.auth.models import User; from subtitle.models import Subtitles; Subtitles.objects.create(code='AN5*',begin='18:00',finish='23:00',description='Ambulatório')" | ./manage.py shell

echo "from django.contrib.auth.models import User; from subtitle.models import Subtitles; Subtitles.objects.create(code='SM4*',begin='07:00',finish='11:00',description='Serviços')" | ./manage.py shell
echo "from django.contrib.auth.models import User; from subtitle.models import Subtitles; Subtitles.objects.create(code='SM4',begin='08:00',finish='12:00',description='Serviços')" | ./manage.py shell
echo "from django.contrib.auth.models import User; from subtitle.models import Subtitles; Subtitles.objects.create(code='SM5',begin='07:00',finish='12:00',description='Serviços')" | ./manage.py shell
echo "from django.contrib.auth.models import User; from subtitle.models import Subtitles; Subtitles.objects.create(code='SM6',begin='07:00',finish='13:00',description='Serviços')" | ./manage.py shell
echo "from django.contrib.auth.models import User; from subtitle.models import Subtitles; Subtitles.objects.create(code='SM6*',begin='08:00',finish='14:00',description='Serviços')" | ./manage.py shell
echo "from django.contrib.auth.models import User; from subtitle.models import Subtitles; Subtitles.objects.create(code='SM4**',begin='09:00',finish='13:00',description='Serviços')" | ./manage.py shell
echo "from django.contrib.auth.models import User; from subtitle.models import Subtitles; Subtitles.objects.create(code='SM4***',begin='10:00',finish='14:00',description='Serviços')" | ./manage.py shell
echo "from django.contrib.auth.models import User; from subtitle.models import Subtitles; Subtitles.objects.create(code='SM5*',begin='08:00',finish='13:00',description='Serviços')" | ./manage.py shell
echo "from django.contrib.auth.models import User; from subtitle.models import Subtitles; Subtitles.objects.create(code='SM5**',begin='09:00',finish='14:00',description='Serviços')" | ./manage.py shell

echo "from django.contrib.auth.models import User; from subtitle.models import Subtitles; Subtitles.objects.create(code='ST4*',begin='13:00',finish='17:00',description='Serviços')" | ./manage.py shell
echo "from django.contrib.auth.models import User; from subtitle.models import Subtitles; Subtitles.objects.create(code='ST4',begin='14:00',finish='18:00',description='Serviços')" | ./manage.py shell
echo "from django.contrib.auth.models import User; from subtitle.models import Subtitles; Subtitles.objects.create(code='ST5',begin='13:00',finish='18:00',description='Serviços')" | ./manage.py shell
echo "from django.contrib.auth.models import User; from subtitle.models import Subtitles; Subtitles.objects.create(code='ST6',begin='13:00',finish='19:00',description='Serviços')" | ./manage.py shell
echo "from django.contrib.auth.models import User; from subtitle.models import Subtitles; Subtitles.objects.create(code='ST6*',begin='12:00',finish='18:00',description='Serviços')" | ./manage.py shell
echo "from django.contrib.auth.models import User; from subtitle.models import Subtitles; Subtitles.objects.create(code='ST4**',begin='12:00',finish='16:00',description='Serviços')" | ./manage.py shell
echo "from django.contrib.auth.models import User; from subtitle.models import Subtitles; Subtitles.objects.create(code='ST4***',begin='15:00',finish='19:00',description='Serviços')" | ./manage.py shell
echo "from django.contrib.auth.models import User; from subtitle.models import Subtitles; Subtitles.objects.create(code='ST5*',begin='14:00',finish='19:00',description='Serviços')" | ./manage.py shell
echo "from django.contrib.auth.models import User; from subtitle.models import Subtitles; Subtitles.objects.create(code='ST5**',begin='12:00',finish='17:00',description='Serviços')" | ./manage.py shell

echo "from django.contrib.auth.models import User; from subtitle.models import Subtitles; Subtitles.objects.create(code='SN4',begin='16:00',finish='22:00',description='Serviços')" | ./manage.py shell
echo "from django.contrib.auth.models import User; from subtitle.models import Subtitles; Subtitles.objects.create(code='SN5',begin='17:00',finish='22:00',description='Serviços')" | ./manage.py shell
echo "from django.contrib.auth.models import User; from subtitle.models import Subtitles; Subtitles.objects.create(code='SN6',begin='16:00',finish='22:00',description='Serviços')" | ./manage.py shell
echo "from django.contrib.auth.models import User; from subtitle.models import Subtitles; Subtitles.objects.create(code='SN12',begin='19:00',finish='07:00',description='Serviços')" | ./manage.py shell
echo "from django.contrib.auth.models import User; from subtitle.models import Subtitles; Subtitles.objects.create(code='SN4*',begin='19:00',finish='23:00',description='Serviços')" | ./manage.py shell
echo "from django.contrib.auth.models import User; from subtitle.models import Subtitles; Subtitles.objects.create(code='SN6*',begin='18:00',finish='00:00',description='Serviços')" | ./manage.py shell
echo "from django.contrib.auth.models import User; from subtitle.models import Subtitles; Subtitles.objects.create(code='SN5*',begin='18:00',finish='23:00',description='Serviços')" | ./manage.py shell
echo "from django.contrib.auth.models import User; from subtitle.models import Subtitles; Subtitles.objects.create(code='SN5**',begin='19:00',finish='00:00',description='Serviços')" | ./manage.py shell
