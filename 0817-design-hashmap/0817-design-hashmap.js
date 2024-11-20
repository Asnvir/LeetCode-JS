
var MyHashMap = function() {
    this.map = [];
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function(key, value) {
    for(let i=0; i < this.map.length; i++){
        const currentKey = this.map[i][0];

        if(key === currentKey) {
            this.map[i][1] = value;
            return;
        }
    }

    this.map.push([key,value]);
};

/** 
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function(key) {
    for(let i=0; i<this.map.length;i++){
        const item = this.map[i];
        const currentKey = this.map[i][0];
        if(key=== currentKey) {
            return this.map[i][1];
        }
    }
    return -1;
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function(key) {
    for(let i=0; i<this.map.length;i++){
        const currentKey = this.map[i][0];
        if(key=== currentKey) {
            this.map.splice(i,1);
        }
    }
};

/** 
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */