export interface IAfterSearchListItemProps{
    setLocationDetailVisible?: (active:boolean)=>void;
    locationDetailVisible: boolean;
    handleOnLocationDetailClick: ()=>void;
}

export interface locationDetailProps{
    locationDetailVisible:boolean;
}