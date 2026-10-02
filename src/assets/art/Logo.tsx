export function Logo({ height = 44 }: { height?: number }) {
  return (
    <img
      src="/shopee_logo.png"
      alt="Shopee"
      style={{
        height: `${height}px`,
        width: 'auto',
      }}
    />
  );
}
