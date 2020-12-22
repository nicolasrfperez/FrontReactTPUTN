import instance from '../Config/axios'

export function Venta(data){
    return instance.post('/ventas',data)
}