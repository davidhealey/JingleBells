// License - Public Domain

namespace Container
{
	// pnlContainer
	const pnlContainer = Content.getComponent("pnlContainer");
	
	pnlContainer.setPaintRoutine(function(g)
	{
		var a = this.getLocalBounds(0);

		g.fillAll(this.get("bgColour"));
		
		g.setFont("Oxygen", 36);
		g.setColour(this.get("textColour"));
		g.drawAlignedText(this.get("text"), [a[0], a[1], a[2], 40], "centred");
	});
}