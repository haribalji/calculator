var string = "";
var v = document.querySelectorAll(".key").length;

for (let i = 0; i < v; i++) {
    document.querySelectorAll(".key")[i].addEventListener('click', function () {
        console.log(this.innerHTML);
        try {
            if (this.innerHTML === '=') {
                string = eval(string);
                if (isNaN(string)) {
                    throw new Error("INPUT ERROR");
                }
                document.querySelector('input').value = string;
            }
            else if (this.innerHTML === 'C') {
                string = '';
                document.querySelector('input').value = string;
            }
            else if (this.innerHTML === 'x' || this.innerHTML === 'X') {
                string = string.slice(0, -1);
                document.querySelector('input').value = string;
            }
            else if (this.innerHTML >= '0' && this.innerHTML <= '9') {
                string = string + this.innerHTML;
                document.querySelector('input').value = string;
            }
            else {
                string = string + this.innerHTML;
                document.querySelector('input').value = string;
            }
        }
        catch (error) {
            string = 'Invalid';
            document.querySelector('input').value = string;
            setTimeout(function () {
                string = "";
                document.querySelector('input').value = string;
            }, 1000);
        }
    });
}

document.addEventListener("keydown", function (e) {
    try {
        if (e.key === 'Enter') {
            string = eval(string);
            if (isNaN(string)) {
                throw new Error("INPUT ERROR");
            }
            document.querySelector('input').value = string;
        }
        else if (e.key === 'Backspace') {
            string = string.slice(0, -1);
            document.querySelector('input').value = string;
        }
        else if (e.key >= '0' && e.key <= '9') {
            string += e.key;
            document.querySelector('input').value = string;
        }
        else if (['+', '-', '*', '/', '.'].includes(e.key)) {
            string += e.key;
            document.querySelector('input').value = string;
        }
    }
    catch (error) {
        string = 'Invalid';
        document.querySelector('input').value = string;
        setTimeout(function () {
            string = "";
            document.querySelector('input').value = string;
        }, 1000);
    }
});
