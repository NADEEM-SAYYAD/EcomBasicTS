export type PropTypes = {
    children : React.ReactNode
}

export type ModalContextType = {
    show : boolean;
    handleModalClose : () => void;
    handleModalShow : () => void;
}