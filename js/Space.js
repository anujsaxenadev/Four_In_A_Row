// Class for Spaces
class Space{
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.id = `space-${x}-${y}`;
        this.token = null;
        this.diameter = 76;
        this.radius = this.diameter / 2;
    }

    /*
     * Creating SVG Spaces
     */
    drawSVGSpace(){
        const svgSpace = document.createElementNS("http://www.w3.org/2000/svg", "circle");

        svgSpace.setAttributeNS(null, "id", this.id);
        svgSpace.setAttributeNS(null, "cx", (this.x * this.diameter) + this.radius);
        svgSpace.setAttributeNS(null, "cy", (this.y * this.diameter) + this.radius);
        svgSpace.setAttributeNS(null, "r", this.radius - 8);
        svgSpace.setAttributeNS(null, "fill", "black");
        svgSpace.setAttributeNS(null, "stroke", "none");

        document.getElementById("mask").appendChild(svgSpace);
    }

    /**
     * Method for marking the space with the dropped token.
     */
    mark(token){
        this.token = token;
    }

    /**
     * Getter method for getting the owner of the token that was dropped into this space.
     */
    get owner(){
        if(this.token === null){
            return null;
        }
        else
            return this.token.owner;
    }
}