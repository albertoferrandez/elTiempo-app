import { useMemo } from 'react'

export function useDateHour() {

    const actualDate = useMemo(() => {
        const date = new Date();
        const weekDays = [
            "Domingo",
            "Lunes",
            "Martes",
            "Miércoles",
            "Jueves",
            "Viernes",
            "Sábado"
        ];

        const day = weekDays[date.getDay()];
        const hour = date.getHours();
        const minutes = date.getMinutes();

      const time = `${hour}:${minutes < 10 ? '0' : ''}${minutes}`

        return { day, time }
    }, [])

  return {
    actualDate
  }
}

