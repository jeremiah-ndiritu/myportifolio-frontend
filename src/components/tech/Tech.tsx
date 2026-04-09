
import Stacks from '../../constants/Tech.ts';
const Tech = () => {
  return (
    <div className="flex justify-around gap-4 bg-white py-5 my-20">
      {Stacks.map((s) => (
        <div
          key={s.id}
          data-aos="zoom-in">
          {s.icon ? (
            <img
              src={s.icon}
              alt={s.label ?? "icon"}
              className="w-7 h-7 icon-white"
            />
          ) : null}
        </div>
      ))}
    </div>
  );
}

export default Tech
