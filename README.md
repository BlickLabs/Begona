Local Develop (This Guide is for distributions based on Debian)
------

## <a name="index"></a> Index

* [Prerequirements](#pre-requirements)
* [OS Requirements](#os-requirements)
* [Installing PostgreSQL dependences](#install-psql)
* [Setting up the project](#project-setup)

### <a name="pre-requirements"></a> Prerequirements.<sub><sub><sub><sub>[Index](#index)</sub></sub></sub></sub>

1. Python 2.7
2. Git

### <a name="os-requirements"></a> OS Requirements.<sub><sub><sub><sub>[Index](#index)</sub></sub></sub></sub>

Installing Dependencies

```bash
$ sudo apt-get install python-pip python-dev libjpeg-dev
```


### <a name="install-psql"></a> Installing PostgreSQL dependences.<sub><sub><sub><sub>[Index](#index)</sub></sub></sub></sub>

```bash
$ sudo apt-get install postgresql postgresql-contrib libpq-dev
```


<a name="database-setup"></a> Setting up the database

```bash
$ sudo su postgres
$ createdb <db_name>
$ createuser -P <db_username>
$ psql
=# GRANT ALL PRIVILEGES ON DATABASE <db_name> TO <db_username>;
=# \q
$ $ exit
```


### <a name="project-setup"></a> Setting up the project.<sub><sub><sub><sub>[Index](#index)</sub></sub></sub></sub>

```bash
$ git clone <code_repository>
$ pip install virtualenv
$ virtualenv  ~/.venv_begona
$ source ~/.venv_begona/bin/activate
$ cd Begona/
$ pip install -r requirements/local.txt
```

To setup the env variables

```bash
$ cp .env-sample .env
```

Fill the env variables, ask to the project leader for the values

```bash
$ source .env
```

To setup the database

```bash
$ ./manage.py migrate
```

Create a superuser for the admin site

```bash
$ ./manage.py createsuperuser
```

Finally run the project using

```bash
$ ./manage.py runserver 8000
```

