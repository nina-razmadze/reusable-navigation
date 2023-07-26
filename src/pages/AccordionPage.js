import Accordion from '../components/Accordion';

export default function AccordionPage() {
  const items = [
    {
      id: 1,
      label: 'Can i use react on  project?',
      content: 'You can use react on any project  you want',
    },
    {
      id: 2,
      label: 'Can i use Javascript on  project?',
      content: 'You can use Javascript on any project  you want',
    },
    {
      id: 3,
      label: 'Can i use Css on  project?',
      content: 'You can use Css on any project  you want ',
    },
  ];
  return (
    <div className='pl-[350px] pt-[100px]'>
      <Accordion items={items} />
    </div>
  );
}
