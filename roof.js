class roof
{
	constructor(x,y,w,h)
	{
		var options={
			isStatic:true			
			}
		
		this.w=w
		this.h=h
		this.body=Bodies.rectangle(x, y, w, h , options);
 		World.add(world, this.body);

	}
	display()
	{
			
			var pos = this.body.position;
			rectMode(CENTER);
			fill("yellow");
			rect(pos.x,pos.y,250,30);
			
	}

}