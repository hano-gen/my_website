  // チェックボックスの状態を保存
  function saveCheckboxState() {
      const checkboxes = document.querySelectorAll('input[type="checkbox"]');
      checkboxes.forEach((checkbox) => {
          localStorage.setItem(checkbox.id, checkbox.checked);
      });
  }

  // ページロード時にチェックボックスの状態を復元
  function loadCheckboxState() {
      const checkboxes = document.querySelectorAll('input[type="checkbox"]');
      checkboxes.forEach((checkbox) => {
          const savedState = localStorage.getItem(checkbox.id);
          if (savedState !== null) {
              checkbox.checked = savedState === 'true';
          }
      });
  }

  // イベントリスナーを追加
  document.addEventListener('DOMContentLoaded', () => {
      loadCheckboxState(); // ページ読み込み時に復元
      const checkboxes = document.querySelectorAll('input[type="checkbox"]');
      checkboxes.forEach((checkbox) => {
          checkbox.addEventListener('change', saveCheckboxState); // 状態変更時に保存
      });
  });