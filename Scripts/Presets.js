// License - Public Domain

namespace Presets
{
	// pnlPresetBrowser
	const pnlPresetBrowser = Content.getComponent("pnlPresetBrowser");
	
	pnlPresetBrowser.setPaintRoutine(function(g)
	{
		var a = this.getLocalBounds(0);
		
		g.setColour(this.get("bgColour"));
		g.fillRoundedRectangle(a, this.get("borderRadius"));
		
		g.setFont("Oxygen", 18);
		g.setColour(this.get("textColour"));
		g.drawAlignedText(this.get("text"), [a[0], a[1], a[2], 30], "centred");
	});
}