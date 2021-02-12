import React, { useCallback, useEffect } from "react";
declare type Fn = () => any;
type Props = {
  hasMore: boolean;
  next: Fn;
  length: number;
  loading: boolean;
  ElementLoading: React.FC;
};

const Pagination: React.FC<Props> = ({
  next,
  loading,
  ElementLoading,
  children,
}) => {
  
  const customEvent = useCallback(
    (e: Event) => {
      if (loading) return;
      if (
        (window.innerHeight + window.pageYOffset) >=
        document.body.offsetHeight
      ) {
        next();
      }
    },
    [loading, next]
  );
  useEffect(() => {
    console.log(loading)
  },[loading])
  useEffect(() => {
    {
      window.addEventListener("scroll", (e: Event): void => {
        customEvent(e);
      });
      return () =>
        window.removeEventListener("scroll", () => {
          console.log("Evento Removido");
        });
    }
  }, [customEvent]);
  return loading ? <ElementLoading /> : <div id="scroll-div">{children}</div>;
};

export default Pagination;
