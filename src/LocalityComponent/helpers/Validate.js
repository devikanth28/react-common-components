
export default function Validate() {
    return {
        isNotEmpty: function (obj) {
            var isNotEmpty = true;
            if (obj == undefined || obj == "undefined" || obj == null || obj == "null") {
                return false;
            }
            switch (typeof obj) {
                case "number":
                    isNotEmpty = obj.toString().length > 0;
                    break;
                case "string":
                    isNotEmpty = obj.trim().length > 0;
                    break;
                case "object":
                    if (obj instanceof Array) {
                        isNotEmpty = obj.length > 0;
                        break;
                    } else {
                        isNotEmpty = Object.keys(obj).length > 0;
                        break;
                    }
            }
            return isNotEmpty;
        },
        isEmpty: function (obj) {
            return !this.isNotEmpty(obj)
        }
    }
}
