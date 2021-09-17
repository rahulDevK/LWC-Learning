export class Triangle {
    constructor(...sides) {
        this.side1 = sides[0]
        this.side2 = sides[1]
        this.side3 = sides[2]
    }

    get isEquilateral() {
        if (this.side1 === this.side2) {
            if (this.side1 === this.side3) {
                if (this.side1 === 0) {
                    return false;
                } else
                    return true;
            }
        }
        return false;
    }

    get isIsosceles() {
        if ((this.side1 === this.side2) || (this.side1 === this.side3) || (this.side3 === this.side2)) {
            if (((this.side1 + this.side2) < this.side3) || ((this.side1 + this.side3) < this.side2) || ((this.side3 + this.side2) < this.side1)) {
                return false;
            } else
                return true;
        }
        else
            return false;
    }

    get isScalene() {
        if ((this.side1 === this.side2) || (this.side1 === this.side3) || (this.side3 === this.side2)) {
            return false;
        }
        else {
            if (((this.side1 + this.side2) < this.side3) || ((this.side1 + this.side3) < this.side2) || ((this.side3 + this.side2) < this.side1)) {
                return false;
            }
            else {
                return true;
            }
        }
    }
}