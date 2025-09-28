export const Person = ({ person }) => (
  <div className="Person">
    <div className="Person__name">{person.name}</div>
    {person.age !== undefined && (
      <div className="Person__age">{person.age}</div>
    )}
    {person.married ? (
      <div className="Person__partner">
        {person.gender === 'male'
          ? `wife: ${person.partner}`
          : `husband: ${person.partner}`}
      </div>
    ) : (
      <div className="Person__partner">I am not married</div>
    )}
  </div>
);
