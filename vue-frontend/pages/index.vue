<template>
  <NewEventWindow />
  <div
    class="grid grid-cols-[25%_1fr_1fr] h-full w-full divide-x divide-y divide-gray-200 dark:divide-gray-700"
  >
    <div class=""><EventForm /></div>
    <div><CallsCardBoard /></div>
    <div
      class="h-full grid grid-rows-2 overflow-auto divide-x divide-y divide-gray-200 dark:divide-gray-700"
    >
      <div class="">
        <MapComponent />
      </div>
      <div class="overflow-auto">
        <UnitsBoard />
      </div>
    </div>
  </div>
</template>
