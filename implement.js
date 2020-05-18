var demo = /** @class */ (function () {
    function demo() {
    }
    demo.prototype.display = function () {
        this.name = 'sabban';
        console.log('i' + this.name);
    };
    return demo;
}());
var de = new demo();
de.display();
