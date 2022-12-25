// License - Public Domain

namespace Ahdsr
{
	// pnlAhdsr
	const pnlAhdsr = Content.getComponent("pnlAhdsr");
	
	pnlAhdsr.setPaintRoutine(function(g)
	{
		var a = this.getLocalBounds(0);
		
		g.setColour(this.get("bgColour"));
		g.fillRoundedRectangle(a, this.get("borderRadius"));
		
		g.setFont("Oxygen", 18);
		g.setColour(this.get("textColour"));
		g.drawAlignedText(this.get("text"), [a[0], a[1], a[2], 30], "centred");
		
		g.setFont("Oxygen", 14);
		
		for (i = 0; i < knbAhdsr.length; i++)
		{
			var k = knbAhdsr[i];
			g.drawAlignedText(k.get("text"), [k.get("x") + k.getWidth() + 10, k.get("y"), 50, k.getHeight() - 10], "left");	
		}
	});
	
	// knbAhdsr
	const knbAhdsr = Content.getAllComponents("knbAhdsr*");
}