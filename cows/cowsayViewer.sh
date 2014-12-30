#!/bin/bash 

command -v cowsay >/dev/null 2>&1 || { echo >&2 "No tienes instalado cowsay, prueba a instalarlo con apt-get install cowsay"; exit 0; }

cowsay "Que quieres que diga yo y todos mis perturbados amigos"
read texto

while [ -z "$texto" ]; do
	clear
	cowsay -e ¬¬ "Escribe algooo"
	read texto
done

if [ $texto = "no" -o $texto = "No" -o $texto = "NO" ]; then 
	cowsay -e -- "Como quieras"
fi

for (( i=3; i<100; i++ ))
do
   echo $i
done

clear

cowsay -e ^^ "ok, alla vamos" 

read

todos=$(cowsay -l)

info=$(echo $todos | tr ":" "\n")

let contador=0
for x in $info
do	
	if [ $contador -lt 4 ]; then
		let contador=$contador+1
	else
    	echo -e "\n\n-->  .: $x :."
		cowsay -f $x "$texto"
		read
	fi
done

exit 0

