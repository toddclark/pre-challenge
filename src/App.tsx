import { useRef, useState } from 'react'

import type { ModalOpenItem } from './App.types.ts';
import './App.css'

import DangerIcon from './assets/DangerIcon.tsx';
import Modal from './components/modal/Modal.tsx';

function App() {
  const refButton1 = useRef(null);
  const refButton2 = useRef(null);
  const refButton3 = useRef(null);

  const [modalOpen, setModalOpen] = useState<ModalOpenItem>({
    deletion: { open: false, refocusElement: refButton1 },
    info: { open: false, refocusElement: refButton2 },
    infoNoActions: { open: false, refocusElement: refButton3 },
  });

  function closeModal(name: string) {
    setModalOpen({
      ...modalOpen,
      [name]: {
        ...modalOpen?.[name],
        open: false,
      },
    });
  }

  function confirmDeletion(itemId: string) {
    closeModal('deletion')
    console.log(`App::confirmDeletion - item with id: "${ itemId }" deletion confirmed.`)
    alert(`Deleted item with id: "${ itemId }"`);
  }

  function openModal(name: string) {
    setModalOpen({
      ...modalOpen,
      [name]: {
        ...modalOpen?.[name],
        open: true,
      },
    });
  }

  return (
    <>
      <button ref={refButton1} onClick={() => openModal('deletion')}>Open Modal #1 (Deletion)</button><br/><br/>
      <Modal
        actions={[
          {
            autoFocus: true,
            handler: () => closeModal('deletion'),
            label: 'Cancel'
          },
          {
            className: 'danger',
            handler: () => {
              confirmDeletion('abc123');
            },
            label: 'Delete'
          }
        ]}
        content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore est earum autem unde laboriosam at nobis eos odio id, magnam vel saepe labore? Mollitia fuga ab quos quisquam corrupti eligendi?"
        icon={<DangerIcon/>}
        open={modalOpen?.deletion?.open ?? false}
        title="Delete Item ABC"
        onClose={() => closeModal('deletion')}
      />

      <button ref={refButton2} onClick={() => openModal('info')}>Open Modal #2 (General Info)</button><br/><br/>
      <Modal
        actions={[
          {
            autoFocus: true,
            handler: () => closeModal('info'),
            label: 'Close'
          }
        ]}
        content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore est earum autem unde laboriosam at nobis eos odio id, magnam vel saepe labore? Mollitia fuga ab quos quisquam corrupti eligendi?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore est earum autem unde laboriosam at nobis eos odio id, magnam vel saepe labore? Mollitia fuga ab quos quisquam corrupti eligendi?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore est earum autem unde laboriosam at nobis eos odio id, magnam vel saepe labore? Mollitia fuga ab quos quisquam corrupti eligendi?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore est earum autem unde laboriosam at nobis eos odio id, magnam vel saepe labore? Mollitia fuga ab quos quisquam corrupti eligendi?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore est earum autem unde laboriosam at nobis eos odio id, magnam vel saepe labore? Mollitia fuga ab quos quisquam corrupti eligendi?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore est earum autem unde laboriosam at nobis eos odio id, magnam vel saepe labore? Mollitia fuga ab quos quisquam corrupti eligendi?"
        open={modalOpen?.info?.open ?? false}
        title="About Item XYZ"
        onClose={() => closeModal('info')}
      />

      <button ref={refButton3} onClick={() => openModal('infoNoActions')}>Open Modal #3 (General Info, No Actions)</button><br/><br/>
      <Modal
        content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore est earum autem unde laboriosam at nobis eos odio id, magnam vel saepe labore? Mollitia fuga ab quos quisquam corrupti eligendi?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore est earum autem unde laboriosam at nobis eos odio id, magnam vel saepe labore? Mollitia fuga ab quos quisquam corrupti eligendi?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore est earum autem unde laboriosam at nobis eos odio id, magnam vel saepe labore? Mollitia fuga ab quos quisquam corrupti eligendi?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore est earum autem unde laboriosam at nobis eos odio id, magnam vel saepe labore? Mollitia fuga ab quos quisquam corrupti eligendi?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore est earum autem unde laboriosam at nobis eos odio id, magnam vel saepe labore? Mollitia fuga ab quos quisquam corrupti eligendi?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore est earum autem unde laboriosam at nobis eos odio id, magnam vel saepe labore? Mollitia fuga ab quos quisquam corrupti eligendi?"
        open={modalOpen?.infoNoActions?.open ?? false}
        title="About Item UVW"
        onClose={() => closeModal('infoNoActions')}
      />
    </>
  );
}

export default App;
