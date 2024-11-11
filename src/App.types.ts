export type ModalOpenItem = Record<string, ModalOpenItemValue>;

export type ModalOpenItemValue = {
  open: boolean,
  refocusElement: React.MutableRefObject<null | HTMLElement>
};
