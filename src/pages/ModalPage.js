import Modal from '../components/Modal';
import Button from '../components/Button';
import { useState } from 'react';

export default function ModalPage() {
  const [isOpen, setIsOpen] = useState(false);

  const handleButtonClick = () => {
    setIsOpen(true);
  };

  const handleCloseClick = () => {
    setIsOpen(false);
  };
  let actionBar = (
    <div>
      <Button primary onClick={handleCloseClick}>
        I Accept
      </Button>
    </div>
  );
  let modal = (
    <Modal onClose={handleCloseClick} actionBar={actionBar}>
      <p>Here is an important agreement for you to accept</p>
    </Modal>
  );
  return (
    <div className='pl-[350px] pt-[100px] '>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo
        turpis ac condimentum porttitor. Sed vehicula gravida sagittis. Cras
        finibus elit ante, quis feugiat ante commodo nec. Curabitur facilisis
        odio lorem, aliquet posuere enim aliquet vitae. Aliquam tincidunt
        efficitur ligula, at egestas ante mattis a. Suspendisse ultricies ligula
        sit amet dictum iaculis. Etiam sit amet massa in metus congue pharetra.
        Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam
        tempus sodales tristique. Praesent fermentum lectus vitae risus
        fermentum, in blandit magna vehicula. Aenean tempus in purus vel
        placerat. Fusce at vehicula purus. Quisque pulvinar magna purus, id
        ultricies risus euismod sagittis. Aliquam nec libero at sem sodales
        dictum id eget justo.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo
        turpis ac condimentum porttitor. Sed vehicula gravida sagittis. Cras
        finibus elit ante, quis feugiat ante commodo nec. Curabitur facilisis
        odio lorem, aliquet posuere enim aliquet vitae. Aliquam tincidunt
        efficitur ligula, at egestas ante mattis a. Suspendisse ultricies ligula
        sit amet dictum iaculis. Etiam sit amet massa in metus congue pharetra.
        Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam
        tempus sodales tristique. Praesent fermentum lectus vitae risus
        fermentum, in blandit magna vehicula. Aenean tempus in purus vel
        placerat. Fusce at vehicula purus. Quisque pulvinar magna purus, id
        ultricies risus euismod sagittis. Aliquam nec libero at sem sodales
        dictum id eget justo.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo
        turpis ac condimentum porttitor. Sed vehicula gravida sagittis. Cras
        finibus elit ante, quis feugiat ante commodo nec. Curabitur facilisis
        odio lorem, aliquet posuere enim aliquet vitae. Aliquam tincidunt
        efficitur ligula, at egestas ante mattis a. Suspendisse ultricies ligula
        sit amet dictum iaculis. Etiam sit amet massa in metus congue pharetra.
        Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam
        tempus sodales tristique. Praesent fermentum lectus vitae risus
        fermentum, in blandit magna vehicula. Aenean tempus in purus vel
        placerat. Fusce at vehicula purus. Quisque pulvinar magna purus, id
        ultricies risus euismod sagittis. Aliquam nec libero at sem sodales
        dictum id eget justo.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo
        turpis ac condimentum porttitor. Sed vehicula gravida sagittis. Cras
        finibus elit ante, quis feugiat ante commodo nec. Curabitur facilisis
        odio lorem, aliquet posuere enim aliquet vitae. Aliquam tincidunt
        efficitur ligula, at egestas ante mattis a. Suspendisse ultricies ligula
        sit amet dictum iaculis. Etiam sit amet massa in metus congue pharetra.
        Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam
        tempus sodales tristique. Praesent fermentum lectus vitae risus
        fermentum, in blandit magna vehicula. Aenean tempus in purus vel
        placerat. Fusce at vehicula purus. Quisque pulvinar magna purus, id
        ultricies risus euismod sagittis. Aliquam nec libero at sem sodales
        dictum id eget justo.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo
        turpis ac condimentum porttitor. Sed vehicula gravida sagittis. Cras
        finibus elit ante, quis feugiat ante commodo nec. Curabitur facilisis
        odio lorem, aliquet posuere enim aliquet vitae. Aliquam tincidunt
        efficitur ligula, at egestas ante mattis a. Suspendisse ultricies ligula
        sit amet dictum iaculis. Etiam sit amet massa in metus congue pharetra.
        Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam
        tempus sodales tristique. Praesent fermentum lectus vitae risus
        fermentum, in blandit magna vehicula. Aenean tempus in purus vel
        placerat. Fusce at vehicula purus. Quisque pulvinar magna purus, id
        ultricies risus euismod sagittis. Aliquam nec libero at sem sodales
        dictum id eget justo.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo
        turpis ac condimentum porttitor. Sed vehicula gravida sagittis. Cras
        finibus elit ante, quis feugiat ante commodo nec. Curabitur facilisis
        odio lorem, aliquet posuere enim aliquet vitae. Aliquam tincidunt
        efficitur ligula, at egestas ante mattis a. Suspendisse ultricies ligula
        sit amet dictum iaculis. Etiam sit amet massa in metus congue pharetra.
        Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam
        tempus sodales tristique. Praesent fermentum lectus vitae risus
        fermentum, in blandit magna vehicula. Aenean tempus in purus vel
        placerat. Fusce at vehicula purus. Quisque pulvinar magna purus, id
        ultricies risus euismod sagittis. Aliquam nec libero at sem sodales
        dictum id eget justo.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo
        turpis ac condimentum porttitor. Sed vehicula gravida sagittis. Cras
        finibus elit ante, quis feugiat ante commodo nec. Curabitur facilisis
        odio lorem, aliquet posuere enim aliquet vitae. Aliquam tincidunt
        efficitur ligula, at egestas ante mattis a. Suspendisse ultricies ligula
        sit amet dictum iaculis. Etiam sit amet massa in metus congue pharetra.
        Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam
        tempus sodales tristique. Praesent fermentum lectus vitae risus
        fermentum, in blandit magna vehicula. Aenean tempus in purus vel
        placerat. Fusce at vehicula purus. Quisque pulvinar magna purus, id
        ultricies risus euismod sagittis. Aliquam nec libero at sem sodales
        dictum id eget justo.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo
        turpis ac condimentum porttitor. Sed vehicula gravida sagittis. Cras
        finibus elit ante, quis feugiat ante commodo nec. Curabitur facilisis
        odio lorem, aliquet posuere enim aliquet vitae. Aliquam tincidunt
        efficitur ligula, at egestas ante mattis a. Suspendisse ultricies ligula
        sit amet dictum iaculis. Etiam sit amet massa in metus congue pharetra.
        Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam
        tempus sodales tristique. Praesent fermentum lectus vitae risus
        fermentum, in blandit magna vehicula. Aenean tempus in purus vel
        placerat. Fusce at vehicula purus. Quisque pulvinar magna purus, id
        ultricies risus euismod sagittis. Aliquam nec libero at sem sodales
        dictum id eget justo.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo
        turpis ac condimentum porttitor. Sed vehicula gravida sagittis. Cras
        finibus elit ante, quis feugiat ante commodo nec. Curabitur facilisis
        odio lorem, aliquet posuere enim aliquet vitae. Aliquam tincidunt
        efficitur ligula, at egestas ante mattis a. Suspendisse ultricies ligula
        sit amet dictum iaculis. Etiam sit amet massa in metus congue pharetra.
        Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam
        tempus sodales tristique. Praesent fermentum lectus vitae risus
        fermentum, in blandit magna vehicula. Aenean tempus in purus vel
        placerat. Fusce at vehicula purus. Quisque pulvinar magna purus, id
        ultricies risus euismod sagittis. Aliquam nec libero at sem sodales
        dictum id eget justo.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo
        turpis ac condimentum porttitor. Sed vehicula gravida sagittis. Cras
        finibus elit ante, quis feugiat ante commodo nec. Curabitur facilisis
        odio lorem, aliquet posuere enim aliquet vitae. Aliquam tincidunt
        efficitur ligula, at egestas ante mattis a. Suspendisse ultricies ligula
        sit amet dictum iaculis. Etiam sit amet massa in metus congue pharetra.
        Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam
        tempus sodales tristique. Praesent fermentum lectus vitae risus
        fermentum, in blandit magna vehicula. Aenean tempus in purus vel
        placerat. Fusce at vehicula purus. Quisque pulvinar magna purus, id
        ultricies risus euismod sagittis. Aliquam nec libero at sem sodales
        dictum id eget justo.
      </p>
      <Button onClick={handleButtonClick} primary>
        Open Modal
      </Button>
      {isOpen && modal}
    </div>
  );
}
