#!bin/bash
echo "from django.contrib.auth.models import User; User.objects.create_superuser('victorhdcoelho', 'victor@example.com', 'pass')" | ./manage.py shell
echo "from django.contrib.auth.models import User; from schedule.models import Calendar; Calendar.objects.create(name='Calendario_Medico', slug='calendario-medico')" | ./manage.py shell
echo "from django.contrib.auth.models import User; from schedule.models import Event, Calendar; calendar= Calendar(1); Event.objects.create(status = True, title= 'Mauricio', start='2018-04-17T17:25:32Z', end='2018-04-20T17:25:34Z', calendar = calendar);
calendar= Calendar(1); Event.objects.create(status = True, title= 'Mauricio', start='2018-04-17T17:25:32Z', end='2018-04-20T17:25:34Z', calendar = calendar);
calendar= Calendar(1); Event.objects.create(status = True, title= 'Mauricio', start='2018-04-17T17:25:32Z', end='2018-04-20T17:25:34Z', calendar = calendar);
calendar= Calendar(1); Event.objects.create(status = True, title= 'Eduardo', start='2018-04-17T17:25:32Z', end='2018-04-20T17:25:34Z', calendar = calendar);
calendar= Calendar(1); Event.objects.create(status = True, title= 'Ulysses', start='2018-04-17T17:25:32Z', end='2018-04-20T17:25:34Z', calendar = calendar);
calendar= Calendar(1); Event.objects.create(status = True, title= 'Caio', start='2018-04-17T17:25:32Z', end='2018-04-20T17:25:34Z', calendar = calendar);
calendar= Calendar(1); Event.objects.create(status = True, title= 'Joao', start='2018-04-17T17:25:32Z', end='2018-04-20T17:25:34Z', calendar = calendar);
calendar= Calendar(1); Event.objects.create(status = True, title= 'Marcio', start='2018-04-17T17:25:32Z', end='2018-04-20T17:25:34Z', calendar = calendar);
" | ./manage.py shell

