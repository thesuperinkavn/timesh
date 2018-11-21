<div class="row">
    <div class="col-sm-6 col-md-3">
        <div class="panel panel-body panel-body-accent">
            <div class="media no-margin">
                <div class="media-left media-middle">
                    <i class="icon-file-text icon-3x text-success-400"></i>
                </div>

                <div class="media-body text-right">
                    <h3 class="no-margin text-semibold">{{ count($timesheet_this_month) }}</h3>
                    <span class="text-uppercase text-size-mini text-muted">timesheet đã làm trong tháng</span>
                </div>
            </div>
        </div>
    </div>

    <div class="col-sm-6 col-md-3">
        <div class="panel panel-body">
            <div class="media no-margin">
                <div class="media-left media-middle">
                    <i class="icon-file-check icon-3x text-blue-400"></i>
                </div>

                <div class="media-body text-right">
                    <h3 class="no-margin text-semibold">{{ count($timesheet_on_time_this_month) }}</h3>
                    <span class="text-uppercase text-size-mini text-muted">timesheet đúng giờ</span>
                </div>
            </div>
        </div>
    </div>

    <div class="col-sm-6 col-md-3">
        <div class="panel panel-body">
            <div class="media no-margin">
                <div class="media-body">
                    <h3 class="no-margin text-semibold">{{ count($timesheet_this_month) - count($timesheet_on_time_this_month) }}</h3>
                    <span class="text-uppercase text-size-mini text-muted">timesheet làm muộn</span>
                </div>

                <div class="media-right media-middle">
                    <i class="icon-file-minus2 icon-3x text-orange-400"></i>
                </div>
            </div>
        </div>
    </div>

    <div class="col-sm-6 col-md-3">
        <div class="panel panel-body">
            <div class="media no-margin">
                <div class="media-body">
                    <h3 class="no-margin text-semibold">{{ $total_day_not_timesheet }}</h3>
                    <span class="text-uppercase text-size-mini text-muted">ngày chưa có timesheet</span>
                </div>

                <div class="media-right media-middle">
                    <i class="icon-warning icon-3x text-danger-400"></i>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="row">
    <div class="col-md-3">

        <!-- Satisfaction rate -->
        <div class="panel panel-body text-center">
            <div class="svg-center position-relative" id="progress_icon_one"></div>
            <h2 class="progress-percentage mt-15 mb-5 text-semibold">0%</h2>

            Tỉ lệ timesheet đúng giờ
            <div class="text-size-small text-muted">Cho phép nhỏ nhất 80%</div>
        </div>
        <!-- /satisfaction rate -->

    </div>
</div>

<script>
    var all = '{{ count($timesheet_this_month) }}';
    var ontime = '{{ count($timesheet_on_time_this_month) }}';
    var result = (all / ontime) / 10;
    progressIcon('#progress_icon_one', 42, 2.5, "#eee", "#EF5350", result, "icon-heart6");
    
    // Chart setup
    function progressIcon(element, radius, border, backgroundColor, foregroundColor, end, iconClass) {


        // Basic setup
        // ------------------------------

        // Main variables
        var d3Container = d3.select(element),
            startPercent = 0,
            iconSize = 32,
            endPercent = end,
            twoPi = Math.PI * 2,
            formatPercent = d3.format('.0%'),
            boxSize = radius * 2;

        // Values count
        var count = Math.abs((endPercent - startPercent) / 0.01);

        // Values step
        var step = endPercent < startPercent ? -0.01 : 0.01;


        // Create chart
        // ------------------------------

        // Add SVG element
        var container = d3Container.append('svg');

        // Add SVG group
        var svg = container
            .attr('width', boxSize)
            .attr('height', boxSize)
            .append('g')
                .attr('transform', 'translate(' + (boxSize / 2) + ',' + (boxSize / 2) + ')');


        // Construct chart layout
        // ------------------------------

        // Arc
        var arc = d3.svg.arc()
            .startAngle(0)
            .innerRadius(radius)
            .outerRadius(radius - border)
            .cornerRadius(20);


        //
        // Append chart elements
        //

        // Paths
        // ------------------------------

        // Background path
        svg.append('path')
            .attr('class', 'd3-progress-background')
            .attr('d', arc.endAngle(twoPi))
            .style('fill', backgroundColor);

        // Foreground path
        var foreground = svg.append('path')
            .attr('class', 'd3-progress-foreground')
            .attr('filter', 'url(#blur)')
            .style({
                'fill': foregroundColor,
                'stroke': foregroundColor
            });

        // Front path
        var front = svg.append('path')
            .attr('class', 'd3-progress-front')
            .style({
                'fill': foregroundColor,
                'fill-opacity': 1
            });


        // Text
        // ------------------------------

        // Percentage text value
        var numberText = d3.select('.progress-percentage')
                .attr('class', 'mt-15 mb-5');

        // Icon
        d3.select(element)
            .append("i")
                .attr("class", iconClass + " counter-icon")
                .style({
                    'color': foregroundColor,
                    'top': ((boxSize - iconSize) / 2) + 'px'
                });


        // Animation
        // ------------------------------

        // Animate path
        function updateProgress(progress) {
            foreground.attr('d', arc.endAngle(twoPi * progress));
            front.attr('d', arc.endAngle(twoPi * progress));
            numberText.text(formatPercent(progress));
        }

        // Animate text
        var progress = startPercent;
        (function loops() {
            updateProgress(progress);
            if (count > 0) {
                count--;
                progress += step;
                setTimeout(loops, 10);
            }
        })();
    }

</script>