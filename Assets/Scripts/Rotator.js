﻿#pragma strict

function Start () {

}

function Update ()
{
	transform.Rotate(Vector3(15, 30, 45) * Time.deltaTime);
}