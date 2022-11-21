import { ElementType, PropsWithChildren } from "react";
import cn from "classnames";

type DotsProps = {
  className?: string;
};

export const Dots = ({ className }: DotsProps) => {
  return (
    <>
      <div
        className={cn(
          `block bg-gradient-to-r from-blue-700 to-poly-red`,
          className
        )}
      ></div>
      <style jsx>{`
        div {
          mask-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACgCAYAAACLz2ctAAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAY/SURBVHgB7dpPS1tZGMfxJyZam0khDaktWFp3DVllKU5xNeJCETfuXXQ9fQt9Cb6FzrIrZbrR2VgRmqUbgzJQWlGomAFBySJp4vyeeE1tR/yTzbnM/X7g4VxPbjY/npt77zmaAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACA0FIWE+VyeUiyzWbz9dnZWUlTFVUp+nhPc5sa13Z2dt4a/sPzazQa3fz0Z0l5VVKpVC8/1ab+Xjs4OIhVfrFoQIWX63Q6EwMDAzMKblJTeYWV13E+OuVUVVfta67abrdXBwcHq7Va7dRgjx49ymUymQllNqM/Jz03z0/Hvfw0V9fcvo6rqtVWq1U9OjoKnl/GYkBhjCvABTXhvEIq+pwCu3xKLqoxVUnnenP6xfNB1bSE08U4rmFBNa8qKsOfT8lprpefKq/vxCK/AYuBdDo9rYbqNd91onP83NlKpZI1uGmLmu8W5xajc2fHxsaC55e2wEql0qKaae7S88pteHD39Iv5ULeRdUuw0dHRRQ1z9v15+Ta6+elR5uHJycm6BRT8F1DPfVMantrd+W34hSWcMug7P1Xw/II/AyrAlxoKdnceYMUS7iK/K577buIXcPD84vAS8sz6c/ktL7HUeH3nF70pBxWLlxAkVxwacEd1bHfna1h7lnC6jfadn74bPL84NOCW9RegL6xuWsIpg77yixamg+cXvAEVxK7114D7vrVk6Cs/3xWJQ37BG3B4eHhJTbjhV+Qdvlb3Lbnt7e3E7wtr/3xJw4adb1Xelp9bjcO+cPCF6EKh0FEztXQ1ZjQ+03jt6nx061jxqtfrnyzhjo+PO7lcrpufna8o3LS74c234qVF6OD5BW9A7WS0R0ZGDu38NnKqIDsavTzQoeg0/+yrmu+LxveqZS1gf9R3E78PLO379+8fajuzm5/KL+hufsryh/xU3fz0+fK3b98+NhqN4PnF5t+xLpTL5UUNU9EC68Ual7/pbSnQXb/lNJvNRq1Wo/mu4Ftz2qL03ZGXF2uE/qYcvax088tms+QHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD9KG/4Xzs7OLJVK2efPn61YLKay2WyqUCik8vl89/jx48epJ0+e2NHRkcVJymKiXC4PSbbZbL5WmCVNVVSl6OM9zW1qXNvZ2Xlr+MGbN2/s3bt3Q41G4xfl97umSsqroobs5afa1N9rqj90fPbq1avu90KLRQOq+XKdTmdiYGBgRsFNaiqvoPI6zkennKrqqn3NVdvt9urg4GC1VqudGmxkZCSXyWQmdDijmvTcPD8d9/LTXF1z+zquqlZbrVZVv4bB88tYDCiMcQW4oCacV0hFn/NbyiW5qMZUJZ3rzekXzwdV0xJOeYxrWFDNq4p+K/5JTnO9/FR5XcCaSn1QjkHzG7AYSKfT0wqi13zXic7xc2crlUrWEk53Dx+mLWq+W3ylGJ07+/z58+D5BX8JKZVKi2qmuUvPK7fhwd3TL+ZD3UbWLcH03LyoYc6+Py/fRjc/Pco8PDk5WbeAgv8C6rlvSsNTuzu/Db+whFMGfeenCp5f8GdABfhSQ8HuzgOsWMJd5HfFc99N/AIOnl8cXkKeWX8uv+Ullhqv7/yiN+WgYvESguSKQwPuqI7t7nwNa88STrfRfvM70Xe/WGBxaMAt6y9AX1jdtIRTBn3lp+b7Jw75BW9ABbFr/TXgvm8tGfrKz3dFVH9ZYMEbcHh4eElNuOFbRXf4Wt235La3txO/L6x1wCUNG3a+VXlb/h8J1YODg+D5BV+ILhQKHTVTS1djRuMzjdeuzkd7mite9Xr9kyXc8fFx58GDBy07X9HwN+Kbdje8+Va8tAgdPL/gDaidjLY20w/t/DZyqsbqaPTyQIei0/yzr9FD83vVshawP+q7id8HlrbuIofazvSMTqx7jZ55fmlleS86p5ufyvP7U7Xs/4zQaDSC5xebf8e6oL3NRQ1T0QLrxRqXv+ltKdBdv+U0m81GrVaj+a4wOjq6qC3K33T468Uaob8pRy8rf3t+2WyW/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQM+/fuFZyH8QEfgAAAAASUVORK5CYII=);
          mask-position: 10px 10px;
          mask-size: 30px 30px;
          mask-repeat: initial;
        }
      `}</style>
    </>
  );
};
