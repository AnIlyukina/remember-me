import {DEFAULT_DIFFICULT, FIELD, GAME_SPEED, GAME_STATUS} from "@/constants";
import {nextTick} from "vue";


export default function useGameProcess(fields, gameStatus, diffucult, onStart){
    const selectField = (id) => {
        const index = fields.value.findIndex(field => {
            return field.id === id
        });
        if(index > -1 && !fields.value[index].clicked  ){
            fields.value[index].clicked = true

            cheakGame()
        }
    }

    const cheakGame = () => {
        const errorIndex = fields.value.findIndex(field =>{
            return field.clicked && field.value === FIELD.EMPTY
        })
        console.log(errorIndex)
        if (errorIndex > -1){
            setGameOver()
            return;
        }

        const notFoundIndex = fields.value.findIndex(field =>{
            return !field.clicked && field.value === FIELD.FILLED

        })

        if(notFoundIndex === -1){
            setWin()
        }
    }

    const setGameOver = () =>{
        gameStatus.value = GAME_STATUS.FAIL
        diffucult.value = DEFAULT_DIFFICULT
        return
    }

    const setWin = () =>{
        gameStatus.value = GAME_STATUS.WIN

        setTimeout(async() => {

            diffucult.value += 1;

            await nextTick()
            onStart()
        }, GAME_SPEED)

    }

    const isWin = () =>{
        return gameStatus.value = GAME_STATUS.WIN
    }

    const isFail =() =>{
        return gameStatus.value = GAME_STATUS.FAIL
    }

    return{
        selectField,
        isWin,
        isFail
    }
}


