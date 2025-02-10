#
# Powershell script to run docker image in a docker container:
#
$image = (Get-Content -Path ".\docker\_image-name.txt" -First 1)
#
# Some notes:
#  -it  => iteractive
#  -u   => run as this user 
#  -w   => home dir
#  -v   => map current dir (.) TO home dir
#  --rm => remove container when done
#
docker run -it -u user -w /home/user -v .:/home/user -p 8080:8080 -p 9229:9229 --name $image --rm $image bash

# run node server with:
# node --inspect=0.0.0.0:9229 app.js
