import {computed} from "vue";
import { FIELD, GAME_STATUS, GAME_SPEED} from "@/constants";

export default function useGameStart(init, difficult, fields,number, gameStatus){



    const onStart = () => {
        console.log('hvjhs')
        init();
        prepareGame()
    };
    const  prepareGame = () => {


        gameStatus.value = GAME_STATUS.PREVIEW

        for( let i = 0; i <  difficult.value; i++){
            const index =  getRandom(0, number - 1);

            if( fields.value[index].value !== FIELD.FILLED){
                 fields.value[index].value = FIELD.FILLED
            } else{
                i--;
            }
        }

        setTimeout(()=>{

            gameStatus.value = GAME_STATUS.STARTED
        }, GAME_SPEED)
    };



    const getRandom = (min,max) => {
        return Math.floor(Math.random()*(max - min))+min
    }

    const canStartGame = computed(()=>{
        return gameStatus.value !== GAME_STATUS.PREVIEW && gameStatus.value !== GAME_STATUS.WIN
    })

    return{
        onStart,
        canStartGame
    }

}