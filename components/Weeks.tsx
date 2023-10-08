export default function Weeks() {
  return (
    <section className="w-full">
      {[1, 2, 3, 4, 5, 6, 7].map((item) => (
        <div className="w-full h-20 bg-primary-500 border" key={item}></div>
      ))}
    </section>
  );
}
