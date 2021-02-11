<?php
	$PostClientName = filter_input(INPUT_POST, 'fio');
	$PostClientPhone = filter_input(INPUT_POST, 'phone');
	$PostClientEmail = filter_input(INPUT_POST, 'email');

	$clientName = 'Имя: '.$PostClientName.' <br />';
	$clientPhone =  'Телефон: '.$PostClientPhone.' <br />';
	$clientEmail =  'Почта: '.$PostClientEmail.' <br />';
	$themeOfMessage = 'оценканедвижимость.рф: сообщение от клиента';
	$AllInOne =  $clientName.$clientPhone.$clientEmail;
	$headers="From: оценканедвижимость.рф <ocenka@оценканедвижимость.рф>\nReply-to: Ocenka-Efendiev@yandex.ru\nContent-Type: text/html; charset=\"utf-8\"\n";

	$to = 'Ocenka-Efendiev@yandex.ru, neutron9610@yandex.ru, ocenka@xn--80aefcbinbl1accim9bq7czh.xn--p1ai';
	mail($to, $themeOfMessage, $AllInOne, $headers);
?>