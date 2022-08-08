import { ICreateOrder, TOrder, useCreateOrderMutation, useGetOrdersQuery, useUpdateOrderToDeliveredMutation } from "@medixbot/types"
import { useEffect } from "react"
import { Alert } from "react-native"
import { useDispatch } from "react-redux"
import { Dispatch } from "redux"
import { useIsUser } from "../../../customHooks/useIsUser"
import { setOrders } from "../../../redux/actions/orders"
import { client } from "../../apollo"

export const useGetOrders = () => {
    const {data,refetch} = useGetOrdersQuery({client: client})
    const dispatch = useDispatch<Dispatch>()
    const [,getUser] = useIsUser()
    const userInf = getUser()
    //console.log(data)
    useEffect(()=>{
        if(data === undefined) refetch().then(item=>{
            dispatch(setOrders(item?.data?.getOrders?.results,userInf?.id))
        })
      },[userInf?.id])
}

export const useCreateOrder =():[(order: ICreateOrder) => void, (id: string) => void ] => {
    const [mutation, mutationResults] = useCreateOrderMutation()
    const [updateMutation] = useUpdateOrderToDeliveredMutation()
    const createOrder = (order: ICreateOrder) => {
    mutation({
        client: client,
        variables: {data: order},
        onError(error) {
            console.log(error)
        },
    })       
    }

    const updateOrderToDelivered = (id: string) => {
        updateMutation({
            client: client,
            variables: {
                orderId: id
            },
            onError(error) {
                console.log(error)
            },
            onCompleted(data) {
                Alert.alert('Success', 'Delivery confirmed !')
            },
        })
    }

    return [createOrder,updateOrderToDelivered]
}