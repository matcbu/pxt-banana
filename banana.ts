/**
 * Appearance and condition of the banana.
 */
enum Peel {
    //% block=green
    Green = 0,
    //% block=yellow
    Yellow = 1,
    //% block=spotted
    Spotted = 2,
    //% block=blackened
    Blackened = 3,
    //% block=peeled
    Peeled = 4
}

namespace tropic {
    /**
     * The tropical fruit called banana.
     */
    export class banana {
        _condition: Peel;

        constructor() {
            this._condition = Peel.Green;
        }
        /**
         * Make the banana get riper.
         * @param tooMuch make the banana ripen too much, eg: false
         */
        //% weight=66 
        //% blockId=banana_ripen block="%fruit|ripen"
        public ripen(tooMuch: boolean = false): void {
            if (tooMuch) {
                this._condition = Peel.Blackened;            
            } else if (this._condition <= Peel.Spotted) {
                this._condition = this._condition + 1;
            }
        }
        /**
         * Peel the skin off of the banana
         */
        //% weight=65
        //% blockId=banana_peel block="%fruit|peel"
        public peel(): void {
            this._condition = Peel.Peeled;
        }
        /**
         * See if the banana is ripe yet.
         */
        //% weight=64
        //% blockId=banana_ripe block="%fruit|ripe"
        public ripe(): boolean {
            return (this._condition > Peel.Green);
        }
        /**
         * See how ripe the banana is now.
         */
        //% weight=63
        //% blockId=banana_how_ripe block="%fruit|how ripe"
        public howRipe(): Peel {
            return this._condition;
        }
        /**
         * Let the banana go rotten.
         */
        //% weight=62
        //% blockId=banana_rot block="%fruit|let rot"
        public rot(): void {
            this._condition = Peel.Blackened;
        }
    }

    /**
     * Pick a fruit to ripen. Just bananas right now.
     */
    //% weight=81
    //% blockId=tropic_pick block="pick a banana"
    export function pickBanana(): banana {
        return new banana();
    }

    /**
     * Compost a fruit by letting it rot.
     * @param matter plant matter to compost
     */
    //% weight=80
    //% blockId=tropic_compost block="compost %matter"
    export function compost(matter: banana): void {
        matter.rot();
    }
}