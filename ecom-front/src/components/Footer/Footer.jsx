export default function Footer() {
  return (
    <div
      className="footer"
      style={{ backgroundColor: "black", height: "100px" }}
    >
      <p style={{ color: "white", textAlign: "center", marginTop: "30px" }}>
        © 2022 All Rights Reserved
      </p>
      <h2 style={{ color: "white", textAlign: "center" }}>
        <a
          href="https://productive-radish-53e.notion.site/terms-and-condition-for-ecomerce-a079cb656b2b4445a2529d226fdb8b2b"
          target="_blank"
        >
          {" "}
          Terms and Conditions
        </a>{" "}
      </h2>
    </div>
  );
}
