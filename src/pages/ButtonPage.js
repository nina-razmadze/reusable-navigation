import Button from '../components/Button';
import { GoBell, GoCloud, GoAlert } from 'react-icons/go';

export default function ButtonPage() {
  return (
    <div className='pl-[350px] pt-[100px]'>
      <div>
        <Button success rounded outline className='mb-5'>
          <GoBell />
          Click me!
        </Button>
      </div>
      <div>
        <Button danger outline className='mb-5'>
          <GoCloud />
          Buy Now!
        </Button>
      </div>
      <div>
        <Button warning className='mb-5'>
          <GoAlert />
          See Deal!
        </Button>
      </div>
      <div>
        <Button secondary outline className='mb-5'>
          Hide ads!
        </Button>
      </div>
      <div>
        <Button primary rounded className='mb-5'>
          Something!
        </Button>
      </div>
    </div>
  );
}
