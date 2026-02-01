import { useRef } from "react"
import type { KeyboardEvent } from "react"

export const useKeyDownNavigate = () => {
    const inputsRef = useRef<HTMLInputElement[]>([])

    
    const onKeyDown = (index: number) => (event: KeyboardEvent<HTMLInputElement>) => {
        const { key } = event
    
        const inputs = inputsRef.current
        
        if (key === 'Backspace' && inputs[index].value === '') {
            event.preventDefault();
    
            inputs[index].value = ''
            inputs[index - 1]?.focus()
        }
        
        if (key === 'ArrowRight') {
            inputs[index + 1]?.focus()
        }
    
        if (key === 'ArrowLeft') {
            inputs[index - 1]?.focus()
        }
    }

    return {
        inputsRef,
        onKeyDown,
    }
}