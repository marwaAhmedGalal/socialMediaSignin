import { Button } from "antd";
import styles from "./SocialMediaButtons.module.css";
import { url } from "../../Services/api";

function SocialMediaButtons({ formType }: { formType: string }) {
  console.log(formType);
  return (
    <>
      <div className={`d-flex align-items-center flex-column gap-2`}>
        <Button
          className={styles.google}
          href={`${url}/api/${formType}/google`}
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
          href={`${url}/${formType}/facebook`}
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
