import Image from "next/image";

function Logo(props: any) {
  const { renderDefault, title } = props;
  return (
    <div className="flex items-center space-x-2">
      <Image
        className="rounded-full object-cover" 
        src="https://avatars.githubusercontent.com/u/105593137?s=400&u=97c5e25e12a8da3bbe89eaa08f453992cb2f1476&v=4"
        alt="Ahmet Palavan"
        width={50}
        height={50}
      />
      <> {renderDefault(props)} </>
    </div>
  );
}

export default Logo;
