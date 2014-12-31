#pragma strict

var speed : float;
var countText : GUIText;
private var count : int;

function Start ()
{
	count = 0;
	SetCountText();
}

function FixedUpdate ()
{
	var moveHorizontal : float= Input.GetAxis("Horizontal");
	var moveVertical : float = Input.GetAxis("Vertical");
	
	var movement : Vector3 = new Vector3(moveHorizontal, 0.0, moveVertical);
	
	rigidbody.AddForce (movement * speed * Time.deltaTime);

}

function OnTriggerEnter (other : Collider)
{
	if(other.gameObject.tag == "PickUp")
	{
		other.gameObject.SetActive(false);
		count += 1;
		SetCountText();
	}
}

function SetCountText()
{
	countText.text = "Count: " + count.ToString();
}