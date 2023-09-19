import { Button } from "antd";
import styles from "./SocialMediaButtons.module.css";

function SocialMediaButtons({ formType }: { formType: string }) {
  console.log(formType);
  return (
    <>
      <div className={`d-flex align-items-center flex-column gap-2`}>
        <Button
          className={styles.google}
          href={`http://192.168.90.164:8000/api/${formType}/google`}
          icon={
            <img
              src="/public/images/googleicon.png"
              alt=""
              className={styles.w15}
            />
          }
        >
          Continue with Google
        </Button>

        <Button
          className={styles.google}
          href={`http://192.168.90.164:8000/api/${formType}/facebook`}
          icon={
            <img
              src="/public/images/facebookicon.png"
              alt=""
              className={styles.w15}
            />
          }
        >
          Continue with Google
        </Button>
      </div>
    </>
  );
}

export default SocialMediaButtons;
