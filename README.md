Jun(a)k - yoonak
=================

In Croatian **junak** pronouncing **yoonak** means hero. Be a yoonak. Report when you find garbage in the wild.
We will make sure to collect it!

Screencast
----------

WIP screencast

![](https://media.giphy.com/media/hTBhgjuWbNMbwNppz2/giphy.gif)
![](https://media.giphy.com/media/kGcc1500etmkDBx6yb/giphy.gif)

Apps
----

junkR is frontend part of the app.

yoonak is backend part

Backend Tech
-----------

1. Django
2. GraphQL

Frontend Tech
-------------

1. React
2. Appolo

Report wild garbage be Yoonak
-----------------------------

1. Google report garbage.
2. Open page
3. Click on report
4. Enable location services if they are not
5. Take a picture
6. Send report
7. Leave us mail to collect reward


Development server setup
-------------------------

Create self signed ssl for your local domain in my case th.loca

```shell
openssl req -x509 -out th.loc.crt -keyout th.loc.key \
  -newkey rsa:2048 -nodes -sha256 \
  -subj '/CN=th.loc' -extensions EXT -config <( \
   printf "[dn]\nCN=th.loc\n[req]\ndistinguished_name = dn\n[EXT]\nsubjectAltName=DNS:th.loc\nkeyUsage=digitalSignature\nextendedKeyUsage=serverAuth")

```

Make PEM file from key and crt

```shell
cat th.loc.key th.loc.crt > th.loc.pem
```

Change package.json to point webpack to our pem ssl cert

```shell
"start": "HTTPS=true react-scripts start",
"prestart": "rm ./node_modules/webpack-dev-server/ssl/server.pem && cp -f ./certs/th.loc.pem ./node_modules/webpack-dev-server/ssl/server.pem",
```

Run servers with

```shell
yarn start
and
python manage.py runserver_plus --cert-file ../certs/th.loc.crt --key-file ../certs/th.loc.key 0.0.0.0:8000
```
