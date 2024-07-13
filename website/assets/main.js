async function walkTree(root, visit) {
  await visit(root);
  for (const node of root.childNodes) {
    await walkTree(node, visit);
  }
}

addEventListener("DOMContentLoaded", function () {
  const globalContainer = document.querySelector("#global-container");

  walkTree(globalContainer, function (el) {
    const style = el.style;
    if (!!style) {
      style.visibility = "hidden";
    }
  });

  walkTree(globalContainer, function (el) {
    const style = el.style;
    if (!!style) {
      style.visibility = "visible";
    }
    return new Promise((resolve) => setTimeout(resolve, 1));
  });
});
